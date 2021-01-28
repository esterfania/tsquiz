import React from 'react';
import Spinner from '../Spinner';
import Widget from '../Widget';

export function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>
        <Spinner />
      </Widget.Content>
    </Widget>
  );
}
