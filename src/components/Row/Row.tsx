import React, { useState, useEffect } from 'react';
import InvestimentFundsRepository from '../../modules/Funds/Providers/Repositories/Mocks/MockFundRepositories';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./Row.css";


interface FundProps {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

interface IFunds {
    title: string,
    percentage: number;
    image: string;
    details: string;
}

const Row: React.FC<FundProps> = ({ title, fetchUrl, isLargeRow }: FundProps) => {

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

            <div className='row-funds'>
                {funds.map(fund => (
                    <div>
                        <div>
                            <img key={fund.image} className={`row-fund ${isLargeRow && 'row-fund-large'}`} src={fund.image} alt={fund.title}/>
                            <div className='fund-title'>{fund.title}</div>
                            <div className='fund-title'>{fund.details}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Row;