import React from 'react'
import Region from '../../Components/Region'

import AE from '../../Assetse/AE.png'
import AS from '../../Assetse/AS.png'
import USA from '../../Assetse/USA.png'
import RU from '../../Assetse/RU.png'
import IT from '../../Assetse/IT.png'
import DK from '../../Assetse/DK.png'
import FR from '../../Assetse/FR.png'
import CH from '../../Assetse/CH.png'
import UK from '../../Assetse/UK.png'
import { RecommendedContaner, SectionTitle } from '../Recommended'

export default function RegionSec() {
  return (
    <section>
        <SectionTitle>Suppliers by region</SectionTitle>
        <RecommendedContaner>
        <Region src={AE} country='Arabic Emirates' site='shopname.ae' />
        <Region src={AS} country='Australia' site='shopname.ae' />
        <Region src={USA} country='United States' site='shopname.ae' />
        <Region src={RU} country='Russia' site='shopname.aeshopname.ru' />
        <Region src={IT} country='Italy' site='shopname.it' />
        <Region src={DK} country='Denmark' site='shopname.com.dk' />
        <Region src={FR} country='France' site='shopname.com.fr' />
        <Region src={AE} country='Arabic Emirates' site='shopname.ae' />
        <Region src={CH} country='China' site='shopname.ae' />
        <Region src={UK} country='Great Britain' site='shopname.uk' />
        </RecommendedContaner>

    </section>
  )
}
