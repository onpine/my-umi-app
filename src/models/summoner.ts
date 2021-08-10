import { Effect, Reducer, Subscription, request } from 'umi';

export interface SummonerModelState {
  name: string;
  summoners: Array<Object>;
}

export interface SummonerModelType {
  namespace: 'summoner';
  state: SummonerModelState;
  effects: {
    query: Effect;
    fetch: Effect;
  };
  reducers: {
    save: Reducer<SummonerModelState>;
  };
  subscriptions: { setup: Subscription };
}

const SummonerModel: SummonerModelType = {
  namespace: 'summoner',

  state: {
    name: 'summoner',
    summoners: [],
  },

  effects: {
    *query({ payload }, { call, put }) {},
    *fetch({ type, payload }, { put, call, select }) {
      const data = yield request('/web201605/js/summoner.json');
      // 参数查询
      // const data = yield request('/api/herodetails.json', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json; charset=utf-8',
      //   },
      //   body: JSON.stringify({
      //     ename: 110,
      //   }),
      // });
      const localData = [
        {
          summoner_id: 80104,
          summoner_name: '惩击',
          summoner_rank: 'LV.1解锁',
          summoner_description:
            '30秒CD：对身边的野怪和小兵造成真实伤害并眩晕1秒',
        },
      ];
      yield put({
        type: 'save',
        payload: {
          summoners: data || localData,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/summoner') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },
};

export default SummonerModel;
