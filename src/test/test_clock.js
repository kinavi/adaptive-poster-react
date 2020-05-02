import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// Slomux — упрощённая, сломанная реализация Flux.
// Перед вами небольшое приложение, написанное на React + Slomux.
// Это нерабочий секундомер с настройкой интервала обновления.

// Исправьте ошибки и потенциально проблемный код, почините приложение и прокомментируйте своё решение.

// При нажатии на "старт" должен запускаться секундомер и через заданный интервал времени увеличивать свое значение на значение интервала
// При нажатии на "стоп" секундомер должен останавливаться и сбрасывать свое значение

const createStore = (reducer, initialState) => {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;
  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => listeners.push(listener);

  return {getState, dispatch, subscribe};
};

const connect = (mapStateToProps, mapDispatchToProps) =>
  (Component) => {
    class WrappedComponent extends React.Component {
      constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
      }

      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.context.store.getState(), this.props)}
            {...mapDispatchToProps(this.context.store.dispatch, this.props)}
          />
        );
      }

      componentDidUpdate() {
        this.context.store.subscribe(this.handleChange);
      }

      handleChange() {
        this.forceUpdate();
      }
    }

    WrappedComponent.contextTypes = {
      store: PropTypes.object,
    };

    return WrappedComponent;
  };

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
};

// APP
// Не было указаны начальное состояние state.
const initialState = {
  currentInterval: 0,
};

// actions
const CHANGE_INTERVAL = 'CHANGE_INTERVAL';

// action creators
const changeInterval = (value) => ({
  type: CHANGE_INTERVAL,
  payload: value,
});


// reducers
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      return {
        currentInterval: state.currentInterval += action.payload, // Появилось начальное состояние. Немного переделал reducer.
      };
    default:
      return state;
  }
};

// components

class IntervalComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handlerClick = this.handlerClick.bind(this);
  }

  // Итервал не должен быть отрицательным.
  handlerClick(value) {
    if ((this.props.currentInterval+value)>=0) {
      this.props.changeInterval1(value);
    }
  }


  render() {
    return (
      <div>
        <span>Интервал обновления секундомера: {this.props.currentInterval} сек.</span>
        <span>
          <button onClick={() => this.handlerClick(-1)}>-</button>
          <button onClick={() => this.handlerClick(1)}>+</button>
        </span>
      </div>
    );
  }
}

// Аргументы connect сначала state, dispatch.
const Interval = connect((state) => ({
  currentInterval: state.currentInterval,
}),
(dispatch) => ({
  changeInterval1: (value) => dispatch(changeInterval(value)),
}),
)(IntervalComponent);

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);

    // в конструкторе надо указать начальное состояние state.
    this.state = {
      isRun: false,
      currentTime: 0,
    };

    // А так-же надо забиндить функции класса к this. Для того, чтобы компонент знал с каким объектом ему работать
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.throwTimer = this.throwTimer.bind(this);
  }

  // После каждого изменения currentInterval должен происходить перезапуск таймера
  componentDidUpdate(prevProps) {
    if (this.props.currentInterval !== prevProps.currentInterval&&this.timeId!==null) {
      this.throwTimer();
      this.handleStart();
    }
  }

  // После размонтирования надо чистить память от setInterval
  componentWillUnmount() {
    clearTimeout(this.timeId);
  }

  render() {
    return (
      <div>
        <Interval />
        <div>
            Секундомер: {this.state.currentTime} сек.
        </div>
        <div>
          <button onClick={this.handleStart}>Старт</button>
          <button onClick={this.handleStop}>Стоп</button>
        </div>
      </div>
    );
  }

  handleStart() {
    // Перед каждым стартом надо чистить память от старого вызова setInterval
    if (this.timeId) {
      this.throwTimer();
    }
    this.startTimer();
  }

  handleStop() {
    this.throwTimer();
    this.setState({currentTime: 0});
  }

  startTimer() {
    // Надо использовать setInterval
    // (setInterval -циклично испольняется через промежуток времени, setTimeout - испольняет функциюю только один раз)
    this.timerId = setInterval(() => {
      this.tick();
    }, this.props.currentInterval*1000); // Второй аргумент setInterval считается в ms. Значит надо наши интервал * 1000
  }

  throwTimer() {
    clearTimeout(this.timerId);
  }

  tick() {
    this.setState({
      currentTime: this.state.currentTime + this.props.currentInterval,
    });
  }
}

// Кажется тут ошибка. Надо указать конкретное значение currentInterval
const Timer = connect((state) => ({
  currentInterval: state.currentInterval,
}), (dispatch) => ({
  changeTime: (value) => dispatch(changeTime(value)),
}))(TimerComponent);

// функция render должна быть подписан на изменение состояния. Вынес ее отдельно. Не было указаны начальное состояние state. Из-за этого вылезали баги при старте таймера
const store = createStore(reducer, initialState);

const render = () =>
  ReactDOM.render(
      <Provider store={store}>
        <Timer />
      </Provider>,
      document.getElementById('react-container'),
  );
// реализовать подпись на изменения состояния
store.subscribe(render);
render();
