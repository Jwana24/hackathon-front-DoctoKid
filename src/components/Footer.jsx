import React from 'react';
import doctodino from '../img/doctodino.png';
import fbk from '../img/Facebook-blc.png'
import insta from '../img/Intsagram-blc.png'
import pin from '../img/Pinterest-blc.png'
import twt from '../img/Twitter-blc.png'
import love from '../img/love.png'

const Footer = () => {
  return (
    <footer class="page-footer font-small stylish-color-dark pt-4">
        <div class="container text-center text-md-left">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div>
                        <img id="img-footer-xs" src={doctodino} alt="Logo Geeokoss" />
                    </div>
                    <div className="row mb-2">
                        <img id="img-footer-lg" src={doctodino} alt="Logo Geeokoss" />
                        <div className="brand-font brand-footer">DoctoDino</div>
                    </div>
                    <div>
                        <ul class="list-unstyled">
                            <li><a href="#!">L'équipe DoctoDino</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 mx-auto">
                    <div>
                        <ul class="list-unstyled">
                            <li><a href="contact.html">Nous contacter</a></li>
                        </ul>
                    </div>
                    <div class="row social-media">
                        <a href="#"><img src={fbk} class="social" alt="Suivez-nous sur Facebook" /></a>
                        <a href="#"><img src={twt} class="social" alt="Suivez-nous sur Twitter" /></a>
                        <a href="#"><img src={insta} class="social" alt="Suivez-nous sur Instagram" /></a>
                        <a href="#"><img src={pin} class="social" alt="Suivez-nous sur Pinterest" /></a>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div class="footer-copyright text-center">
            <p>© 2020 | Made with <img src={love} class="love" alt="love" /> by The Wild Anatomy</p>
        </div>
    </footer>
  );
};

export default Footer;
