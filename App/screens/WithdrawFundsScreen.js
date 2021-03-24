import React from 'react';

import AddWithdrawFundsView from "../components/AddWithdrawFundsView";

export default function AddFundsScreen({ navigation, portfolioid }) 
{
    return <AddWithdrawFundsView navigation={navigation} addFunds={false} />;
}