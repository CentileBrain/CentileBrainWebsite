import { Col, Icon, Menu, Row } from 'antd';
import enquire from 'enquire.js';
import React from 'react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
    { key: 'home', label: 'Home', path: '/' },
    { key: 'explore', label: 'Explore CentileBrain', path: '/explore' },
    { key: 'model_repository', label: 'CentileBrain Model', path: '/model' },
    { key: 'brainAge', label: 'BrainAGE Model', path: '/brainAge_developmental' },
    { key: 'faq', label: 'FAQ', path: '/faq' },
    // CHANGE: Added '/#' to manually trigger the Hash Router in the new tab
    { key: 'eHarmonize', label: 'eHarmonize', path: '/#/eHarmonize', newTab: true },
    { key: 'publications', label: 'Publications', path: '/publications' },
    { key: 'team', label: 'Core Team', path: '/team' },
    { key: 'contact', label: 'Contact', path: '/contact' },
];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuMode: 'horizontal',
            showMobileMenu: false,
            firstLoad: !sessionStorage.getItem('centileBrainHeaderShown'),
        };
        this.expandMobileMenu = this.expandMobileMenu.bind(this);
        this.collapseMobileMenu = this.collapseMobileMenu.bind(this);
    }

    componentDidMount() {
        enquire.register('screen and (max-width:1200px)', {
            match: () => {
                this.setState({ menuMode: 'inline' });
            },
            unmatch: () => {
                this.setState({ menuMode: 'horizontal' });
            },
        });

        if (this.state.firstLoad) {
            sessionStorage.setItem('centileBrainHeaderShown', 'true');
        }
    }

    expandMobileMenu() {
        this.setState({ showMobileMenu: true });
    }

    collapseMobileMenu() {
        this.setState({ showMobileMenu: false });
    }

    render() {
        const { menuMode, showMobileMenu, firstLoad } = this.state;

        const headerStyles = `
            @keyframes fadeInSlideRight {
                0% {
                    opacity: 0;
                    transform: translateX(-20px);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .ant-menu-item a, 
            .ant-menu-item a:hover,
            .ant-menu-item a:visited,
            .ant-menu-item span {
                text-decoration: none !important;
                color: inherit !important; 
            }

            .nav-animate-enter {
                animation: fadeInSlideRight 0.8s ease-out forwards;
                opacity: 0;
            }
        `;

        const menu = (
            <Menu
                mode={menuMode}
                id="nav"
                key="nav"
                onClick={this.collapseMobileMenu}
                style={{ borderBottom: 'none' }}
            >
                {MENU_ITEMS.map((item, index) => {
                    const shouldAnimate = firstLoad && menuMode === 'horizontal';
                    
                    const animationStyle = shouldAnimate
                        ? { animationDelay: `${index * 0.1}s` }
                        : { opacity: 1 };

                    const className = shouldAnimate ? 'nav-animate-enter' : '';

                    const linkComponent = item.newTab ? (
                        <a 
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'block', color: 'inherit' }}
                        >
                            {item.label}
                        </a>
                    ) : (
                        <Link 
                            to={item.path} 
                            style={{ display: 'block', color: 'inherit' }}
                        >
                            {item.label}
                        </Link>
                    );

                    return (
                        <Menu.Item key={item.key}>
                            <div className={className} style={animationStyle}>
                                {linkComponent}
                            </div>
                        </Menu.Item>
                    );
                })}
            </Menu>
        );

        return (
            <div id="header" className="header">
                <style>{headerStyles}</style>
                {menuMode === 'inline' && !showMobileMenu && (
                    <Icon
                        type="bars"
                        className="nav-phone-icon"
                        onClick={this.expandMobileMenu}
                    />
                )}
                {menuMode === 'inline' && showMobileMenu && menu}
                <Row>
                    <Col
                        xxl={24}
                        xl={24}
                        lg={24}
                        md={24}
                        sm={0}
                        xs={0}
                        offset={0}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div className="header-meta">
                            {menuMode === 'horizontal' ? (
                                <div id="menu">{menu}</div>
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;