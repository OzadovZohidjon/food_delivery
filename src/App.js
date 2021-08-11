import React, { useState } from 'react';
import './App.scss';
import Main from './pages/main/Main';
import TopBar from './component/topBar/TopBar';
import { Route, Switch } from 'react-router-dom';
import Restaurant from './pages/restaurant/Restaurant';
import MealModal from './component/modals/MealModal';

const App = (props) => {

  const [id, setId] = useState(null)
  const [changeModal, setchangeModal] = useState(false)
  const [modalMeal, setmodalMeal] = useState(null)

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows());
    }
  }

  function getId(value) {
    console.log(value)
    setId(value);
  }

  function modalClick(value) {
    setchangeModal(value);
  }


  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal_wrap')) {
      setchangeModal(false)
    }
  })


  function getArrId(value1, value2, value3) {
    props.data.forEach(item => {
      if (item.id === value1) {
        item.sections.forEach((section) => {
          if (section.id === value2) {
            section.meals.forEach((meal) => {
              if (meal.id === value3) {
                return setmodalMeal(meal);
              } else {
                return 'meal no'
              }
            })
          } else {
            return 'section no'
          }
        })
      } else {
        return 'item no'
      }
    });
  }

  return (
    <div className="App">
      <div className={isMobile.any() ? 'wrapper _mobile' : 'wrapper _pc'}>
        <TopBar />
        <Switch>
          <Route path="/" exact >
            <Main data={props.data} getId={(id) => getId(id)} />
          </Route>
          <Route path="/restaurant/:id" exact>
            <Restaurant id={id} data={props.data} modalClick={modalClick} modalValue={changeModal} modalId={(itemId, sectionId, mealId) => { getArrId(itemId, sectionId, mealId) }} />
          </Route>
        </Switch>
        <MealModal changeModal={changeModal} modalClick={modalClick} data={modalMeal} />
      </div>
    </div>
  );
}

export default App;
