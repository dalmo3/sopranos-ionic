import { IonContent, IonText } from "@ionic/react"
import React, { FC } from "react"
import { RouteChildrenProps } from "react-router";
import Header from "../components/Header";
import { IRouteTeam } from "./TeamView";

const FixturesTab: FC<RouteChildrenProps<IRouteTeam>> = ({ match }) => {
  const {
    params: { id }
  } = match!;

  return (
    <>
    <Header title="" />
      <IonContent>
        <IonText>Fixtures</IonText>
      </IonContent>
      
    </>
  );
};
export default FixturesTab