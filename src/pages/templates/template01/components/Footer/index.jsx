import { ContainerFooter } from './styles.js'
import logo from '../../../../../assets/logo/logo-nova.png';
import { Logo } from '../Logo/index.jsx';

export const FooterTemplate01 = () => {

    return (
        <ContainerFooter>
            <div className='container_footer'>
                <div className='about'>
                    <Logo image={logo}/>
                </div>
                <div className='footer_content about'>
                    Paginas
                </div>
                <div className='footer_content about'>
                    Ajuda
                </div>
                <div className='footer_content about'>
                    mapa
                </div>
            </div>
        </ContainerFooter>
    )

}