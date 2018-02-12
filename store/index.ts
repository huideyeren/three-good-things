import { getPeople } from '~/api/people';
import firebase from '~/plugins/firebase';
import { firebaseMutations, firebaseAction } from 'vuexfire';
const db = firebase.database();
const usersRef = db.ref('/users');
const postsRef = db.ref('/posts');
const provider = new firebase.auth.GoogleAuthProvider();

export const state = () => ({
  selected: 1,
  people: [],
  user: null,
  post: null,
  users: [],
  posts: [],
});

export const mutations = {
  select(state, id) {
    state.selected = id;
  },
  setPeople(state, people) {
    state.people = people;
  },
  setCredential (state, { user }) {
    state.user = user;
  },
  savePost (state, { post }) {
    state.post = post;
  },
  ...firebaseMutations,
};

export const getters = {
  selectedPerson: (state) => {
    const p = state.people.find(person => person.id === state.selected);
    return p ? p : { first_name: 'Please,', last_name: 'select someone' };
  },
  posts: (state) => {
    return state.posts.map((post) => {
      post.user = state.users.find(user => user.email === post.from);
      return post;
    }).reverse();
  },
  post: (state) => {
    const post = state.post;
    if (!post) return null;
    post.user = state.users.find(user => user.email === post.from);
    return post;
  },
  users: state => state.users,
  user: state => state.user,
};

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('setPeople', await getPeople(3));
  },
  select({ commit }, id) {
    commit('select', id);
  },
  // tslint:disable-next-line:function-name
  async SET_CREDENTIAL ({ commit }, { user }) {
    if (!user) return;
    await usersRef.child(user.email.replace('@', '_at_').replace(/\./g, '_dot_')).set({
      name: user.displayName,
      email: user.email,
      icon: user.photoURL,
    });
    commit('setCredential', { user });
  },
  // tslint:disable-next-line:function-name
  async INIT_SINGLE ({ commit }, { id }) {
    const snapshot = await postsRef.child(id).once('value');
    commit('savePost', { post: snapshot.val() });
  },
  INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('users', usersRef);
  }),
  INIT_POSTS: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('posts', postsRef);
  }),
  ADD_POST: firebaseAction((ctx, { email, body }) => {
    postsRef.push({
      from: email,
      // tslint:disable-next-line:object-shorthand-properties-first
      body,
    });
  }),
  callAuth () {
    firebase.auth().signInWithRedirect(provider);
  },
};
