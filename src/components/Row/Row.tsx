import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import InvestimentFundsRepository from '../../modules/Funds/Providers/Repositories/Mocks/MockFundRepositories';


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
    fundImage: string;
}

const Row: React.FC<FundProps> = ({ title, fetchUrl, isLargeRow }: FundProps) => {

    const [funds, setFunds] = useState<IFunds[]>([]);

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

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
                            <button onClick={onOpenModal}><img key={fund.image} className={`row-fund ${isLargeRow && 'row-fund-large'}`} src={fund.image} alt={fund.title}/></button>
                            <Modal open={open} onClose={onCloseModal} center>
                                <a href="https://www.orama.com.br/" target="_self"><img key={fund.fundImage} src={fund.fundImage} alt={fund.title}/></a>
                                
                            </Modal>
                            
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