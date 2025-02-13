import React from 'react';
import { GenericPage } from '../components/GenericPage';
import { Title } from '../components/Title';

export function NoPage() {
  return (
    <GenericPage>
       <Title bold={"there is nothing here!"} light={"go back 💀"}></Title>
    </GenericPage>
  );
}