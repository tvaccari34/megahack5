import React, { useState, useEffect } from 'react';
import InvestimentFundsRepository from '../../modules/Funds/Providers/Repositories/Mocks/MockFundRepositories';
import "./Row.css";

interface FundProps {
    title: string;
    fetchUrl: string;
}

interface IFunds {
    title: string,
    percentage: number;
    image: string;
}

const Row: React.FC<FundProps> = ({ title, fetchUrl }: FundProps) => {

    const [funds, setFunds] = useState<IFunds[]>([]);

    console.log(fetchUrl);

    useEffect(() => {
        async function fetchData() {
            const investimentFundsRepository = new InvestimentFundsRepository();
            const investimentFunds = await investimentFundsRepository.findByUserProfile(fetchUrl);
            
            setFunds(investimentFunds);

            return investimentFunds;
        }
        fetchData();
    }, [fetchUrl])

    console.table(funds);

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row-funds">
                {funds.map(fund => (
                    <img key={fund.image} className="row-fund" src={fund.image} alt={fund.title}/>
                ))}
            </div>
            

            {fetchUrl}
        </div>
    );
};

export default Row;