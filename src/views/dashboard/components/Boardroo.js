import React,{ useMemo } from 'react';
import useCashPriceInEstimatedTWAP from '../../../hooks/useCashPriceInEstimatedTWAP';


const Boardroo = () => {
    const cashStat = useCashPriceInEstimatedTWAP();
    const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);


    return (
        <h1>{scalingFactor}</h1>
    )




    
}

export default Boardroo;




