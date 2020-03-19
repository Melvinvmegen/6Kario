import React, { Component, Fragment } from "react";
import Divider from "../../../Components/Divider/Divider";
import StudioMain from "./StudioMain/StudioMain";
import ContentHead from '../../../Components/ContentHead/ContentHead';
import classes from "./Studio.module.css";


class Studio extends Component {
  state = {
    inputs: [
      {
        id: 1, title: 'UN STUDIO DE CREATION 360°', text: 'Notre volonté était de mutualiser nos différents domaines d’expertise afin de proposer un accompagnement qualitatif et à 360°, nous avons donc bi - structurer le studio pour en avoir un contrôle raisonné et une liberté des plus significatives. Une fois de plus, nous souhaitons offrir un cadre favorable à la créativité et la stimulation artistique sous toutes ses formes.'
      },
      {
        id: 2, title: 'UN STUDIO D’ENREGISTREMENT', text: 'L’ accompagnement se veut être des plus performant et humain mais surtout d’être le moins intrusif possible à tous les niveaux afin de garder le rythme et pouvoir proposer des créations toujours plus engageantes, fédératrices et originales.'
      },
      {
        id: 3, title: 'UN STUDIO DE CREATION', text: 'Nos équipes créatives qu’elles soient artistiques, commerciales ou de promotion mettrons à disposition leurs savoirs-faires afin d’optimiser la création et la diffusion de vos oeuvres.Un seul objectif : Sublimer votre créativité et la faire entendre par delà les frontières.'
      }
    ],
    images: [
      { img: "https://source.unsplash.com/random/600x300", alt: "" },
      { img: "https://source.unsplash.com/random/600x300", alt: "" },
      { img: "https://source.unsplash.com/random/600x300", alt: "" },
      { img: "https://source.unsplash.com/random/600x300", alt: "" },
    ],
    nextIcon: <span aria-hidden="true" className="fa fa-chevron-right" />,
    prevIcon: <span aria-hidden="true" className="fa fa-chevron-left" />
  }

  render() {
    return (
      <div className={classes.Studio}>
        <a href="/" id="Studio" className="section-anchor-first"> </a>
        <Divider title="STUDIO" />
        <ContentHead title={this.state.inputs[0].title} text={this.state.inputs[0].text} />
        <StudioMain input1={this.state.inputs[1]} input2={this.state.inputs[2]} next={this.state.nextIcon} prev={this.state.prevIcon} img={this.state.images} />
      </div>
    )
  }
}

export default Studio;

