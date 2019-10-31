import React from 'react';
import './styles/styles.scss'
import Curso from './Curso'

const cursos = [
  {
    title:'React desde cero',
    image:'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    price: 40,
    profesor:'Beto Quiroga',
  },{
    title: 'Drupal desde cero',
    image:'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN',
    price:20,
    profesor: 'Beto Quiroga',
  },{
    title:'Go desde cero',
    image:'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN',
    price:30,
    profesor:'Alexys Lozada',
  },{
    title:'HTML desde cero',
    image:'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t',
    price:0,
    profesor:'Alvaro Felipe',
  }
] 

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src={`https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} alt="city"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="https://ed.team" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  {
    cursos.map((curso,index)=> <Curso key={index} 
                                      title={curso.title} 
                                      image={curso.image} 
                                      price={curso.price} 
                                      profesor={curso.profesor}
                                />
              )
  }
  
</div>
  
  </>
)

export default App
