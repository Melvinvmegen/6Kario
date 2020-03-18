import React, { Component, Fragment } from "react";
import Divider from "../../../Components/Divider/Divider";
import LabelMain from "./LabelMain/LabelMain";
import Carousel from '../../../Components/Carousel/Carousel';
import ContentHead from '../../../Components/ContentHead/ContentHead';


class Label extends Component {
  state = {
    inputs: [
      {
        id: 1, title: 'Label indépendant spécialisé en musiques urbaines', text: 'Couper avec les standarts actuels et mettre l’accent sur l’épanouissement personnel des artistes tout en façilitant le processus créatif afin de proposer des créations personnelles et uniques. Aider les artistes à se développer, rayonner, les soutenirs, et s’engager avec eux.'
      },
      {
        id: 2, title: 'L’HUMAIN COMME PILIER', text: 'L’ accompagnement se veut être des plus performant et humain mais surtout d’être le moins intrusif possible à tous les niveaux afin de garder le rythme et pouvoir proposer des créations toujours plus engageantes, fédératrices et originales.'
      },
      {
        id: 3, title: 'UN ENGAGEMENT SIMPLE', text: 'Nos équipes créatives qu’elles soient artistiques, commerciales ou de promotion mettrons à disposition leurs savoirs-faires afin d’optimiser la création et la diffusion de vos oeuvres.Un seul objectif : Sublimer votre créativité et la faire entendre par delà les frontières.'
      }
    ],
    images: [
      { img: "https://source.unsplash.com/random/1200x600", alt: "Royal Brinkman" },
      { img: "https://source.unsplash.com/random/1200x600", alt: "Goboat" },
      { img: "https://source.unsplash.com/random/1200x600", alt: "Mindseed" },
      { img: "https://source.unsplash.com/random/1200x600", alt: "ThomasKrief" },
    ],
    nextIcon: <span aria-hidden="true" className="fa fa-chevron-right" />,
    prevIcon: <span aria-hidden="true" className="fa fa-chevron-left" />
  }

  render() {
    return (
      <Fragment>
        <Divider title="Label" />
        <ContentHead title={this.state.inputs[0].title} text={this.state.inputs[0].text} />
        <LabelMain input1={this.state.inputs[1]} input2={this.state.inputs[2]} />
        <Carousel next={this.state.nextIcon} prev={this.state.prevIcon} img={this.state.images} />
      </Fragment>
    )
  }
}

export default Label;

