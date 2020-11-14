import InvestimentFundsRepository from '../../../dtos/IInvestmentFundsDTO';
import image1 from '../../../../../assets/image1.jpg';
import image2 from '../../../../../assets/image2.jpg';
import image3 from '../../../../../assets/image3.jpg';
import image4 from '../../../../../assets/image4.jpg';
import image5 from '../../../../../assets/image5.jpg';
import image6 from '../../../../../assets/image6.jpg';
import image7 from '../../../../../assets/image7.jpg';
import image8 from '../../../../../assets/image8.jpg';
import image9 from '../../../../../assets/image9.jpg';
import image10 from '../../../../../assets/image10.jpg';
import image11 from '../../../../../assets/image11.jpg';
import image12 from '../../../../../assets/image12.jpg';
import image13 from '../../../../../assets/image13.jpg';
import image14 from '../../../../../assets/image14.jpg';
import image15 from '../../../../../assets/image15.jpg';
import image16 from '../../../../../assets/image16.jpg';
import image17 from '../../../../../assets/image17.jpg';
import image18 from '../../../../../assets/image18.jpg';
import image19 from '../../../../../assets/image19.jpg';
import image20 from '../../../../../assets/image20.jpg';
import image21 from '../../../../../assets/image21.jpg';
import image22 from '../../../../../assets/image22.jpg';
import image23 from '../../../../../assets/image23.jpg';
import image24 from '../../../../../assets/image24.jpg';


class FundRepositories {

    private fundRepositories: InvestimentFundsRepository[] = [];

    public async findByUserProfile(profileType: string): Promise<InvestimentFundsRepository[]> {

        let investimentFund: InvestimentFundsRepository[] = [];

        switch (profileType) {
            case 'suggestion':
                investimentFund = [
                    { title: 'Órama Ouro FIM', percentage: 23, image: image1, details: ''},
                    { title: 'Órama DI FIRF Simples LP', percentage: 89, image: image2, details: ''},
                    { title: 'Órama Inflação IPCA FIRF LP', percentage: 135, image: image3, details: ''},
                    { title: 'Órama Bolsa Mid Large-Small Cap FIA', percentage: -9.05, image: image4, details: ''},
                    { title: 'Órama Gávea Macro FIC FIM', percentage: 350, image: image5, details: ''},
                    { title: 'Órama Debêntures Incentivadas FIM CP', percentage: 57, image: image6, details: ''},
                    { title: 'Órama BTG Pactual Hedge Plus FIC FIM', percentage: -1.57, image: image7, details: ''},
                    { title: 'Órama Bolsa Mid Large-Small Allure Cap FIA', percentage: -10.05, image: image8, details: ''},
                ];
                break;

            case 'profileFunds':
                investimentFund = [
                    { title: 'Invexa Inter Ibovespa FIA', percentage: 73.23, image: image9, details: ''},
                    { title: 'Western Asset FIA BDR Nível I', percentage: 72.86, image: image10, details: ''},
                    { title: 'Trivèlla 4 Estações FIM', percentage: 63.87, image: image11, details: ''},
                    { title: 'PIMCO Income Dólar FIC FIM IE', percentage: 47, image: image12, details: ''},
                    { title: 'Occam FI Cambial', percentage: 43, image: image13, details: ''},
                    { title: 'BV Votorantim Dólar FIC FI Cambial', percentage: 42, image: image14, details: ''},
                    { title: 'Vinci Internacional FIC FIM IE', percentage: 40.55, image: image15, details: ''},
                    { title: 'Focus FIA BDR Nivel I', percentage: 33.94, image: image16, details: ''},
                ];
            
            break;

            case 'trends':
                investimentFund = [
                    { title: 'Trígono Delphos Income FIC FIA ', percentage: 25, image: image17, details: ''},
                    { title: 'E2M Arb FIM', percentage: 23.9, image: image18, details: ''},
                    { title: 'Vista Multiestratégia FIC FIM', percentage: 22.88, image: image19, details: ''},
                    // { title: 'IP Participações IPG FIC FIA BDR Nível I', percentage: 18.2, image: image20},
                    // { title: 'GEO Empresas Globais em Dólares FIC FIA IE', percentage: 350, image: image21},
                    // { title: 'Real Investor FIM', percentage: 57, image: image22},
                    // { title: 'Dahlia Total Return FIC FIM', percentage: 17.44, image: image23},
                    // { title: 'Quantitas Galápagos FIM', percentage: 16.72, image: image24},
                ];
            
            break;
        
            default:
                break;
        }

        Object.assign(this.fundRepositories, investimentFund)

        return this.fundRepositories;
    }

}

export default FundRepositories;