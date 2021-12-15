import React from 'react';
import FooterLogo from '../assets/cig-master-logo.svg';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function Footer() {
    return (
        <div class="footer">
            <div class="social-media-buttons col-lg-2 col-sm-12 col-xs-12">
                <a href="https://www.facebook.com/caymangovinfo/">
                    <div class="facebook-button social-button"><i class="fab fa-facebook-f"
                        style={{fontSize: '16px', fontWeight: '900'}}></i></div>
                </a>
                <a href="https://www.instagram.com/caymangov/">
                    <div class="instagram-button social-button"><i class="fab fa-instagram"
                        style={{fontSize: '16px', fontWeight: '900'}}></i></div>
                </a>
                <a href="https://twitter.com/caymangovt">
                    <div class="twitter-button social-button"><i class="fab fa-twitter"
                        style={{fontSize: '16px', fontWeight: '900'}}></i></div>
                </a>
                <a href="https://www.youtube.com/user/CIGovtInfoServices">
                    <div class="youtube-button  social-button"><i class="fab fa-youtube"
                        style={{fontSize: '16px', fontWeight: '900'}}></i></div>
                </a >
                <a href="https://www.linkedin.com/company/cayman-islands-government/">
                    <div class="linked-button social-button"><i class="fab fa-linkedin"
                        style={{fontSize: '16px', fontWeight: '900'}}></i></div>
                </a >
            </div >
            <div class="copyright col-lg-6 col-md-12 col-sm-12">
                <div style={{textAlign:'center'}}>
                    <div><span style={{fontSize:'12px'}}><a href="https://www.gov.ky/site-map"><span style={{color:'#000000'}}>Site
                        Map</span></a><span style={{color:'#000000'}}>&nbsp;|&nbsp;</span></span><span
                            style={{fontSize:'12px'}}><a linktype="scs-link-webpage"
                                href="https://www.gov.ky/terms-conditions"><span style={{color:'#000000'}}>Terms
                                    &amp; Conditions</span></a><span style={{color:'#000000'}}>&nbsp;|&nbsp;</span></span><span
                                         style={{fontSize:'12px'}}><a linktype="scs-link-webpage"
                                            href="https://www.gov.ky/privacy-notice"><span style={{color:'#000000'}}>Privacy
                                                Notice</span></a></span>
                    </div>
                    <span style={{fontSize:'12px'}}>Cayman
                        Islands Government | Government Admin Building. Grand Cayman. Cayman Islands | (345) 949-7900</span>
                </div>
            </div>
            <div class="logo col-lg-2 col-md-2 col-sm-12" style={{display:'flex', justifyContent: 'center'}}><img
                src={FooterLogo} width="150px" alt="Cayman Islands Government Logo"/>
            </div>
        </div >
    );
}
