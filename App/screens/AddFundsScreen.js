import React from 'react';

import AddWithdrawFundsView from "../components/AddWithdrawFundsView";

export default function AddFundsScreen({ navigation, portfolioid }) 
{
    console.log("Add Funds Screen portfolioid " + portfolioid);
    return <AddWithdrawFundsView portfolioid={portfolioid} navigation={navigation} addFunds={true} />;
}