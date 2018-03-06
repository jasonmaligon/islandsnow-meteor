import React from 'react';
import IslandSnowLogo from '../components/IslandSnowLogo';
import Middle from '../components/Middle';
import FullWidthImage from '../components/FullWidthImage';

export default class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <IslandSnowLogo/>
          <Middle/>
          <FullWidthImage/>
        </div>
    );
  }
}
