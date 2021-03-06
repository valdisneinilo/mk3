import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import styles from "../../styles/boleto.module.css";
import Link from "next/link";
import Image from 'next/image'

import MaxPrint from '../../public/marcas/marca1.png'
import Off_Paper from '../../public/marcas/marca2.png'
import Compactor from '../../public/marcas/marca3.png'
import Seanit from '../../public/marcas/marca4.png'
import Mercur from '../../public/marcas/marca5.png'
import Bacchi from '../../public/marcas/marca6.png'
import ACP from '../../public/marcas/marca7.png'
import SD from '../../public/marcas/marca8.png'
import Adere from '../../public/marcas/adere.png'
import Acrimet from '../../public/marcas/acrimet.png'

const Modal = () => {
  const [email, setEmail] = useState("");
  const [razao, setRazao] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nf, setNf] = useState("");
  const [load, setLoad] = useState("");
  const [representada, setRepresentada] = useState("");

  function mostrarForm({ target }) {
    const form = document.querySelector("#form");
    form.style.display = "flex";
  }

  async function enviar(evt) {
    evt.preventDefault();
    fetch("/api/boletomk3/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        razao,
        cnpj,
        nf,
      }),
    })

    fetch("/api/boleto/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        representada,
        email,
        razao,
        cnpj,
        nf,
      }),
    })
      .then(
        setEmail(""),
        setRazao(""),
        setCnpj(""),
        setNf(""),
        setLoad("Email enviado")
      )
      .catch((res, error) => {
        if (res.status === 500) {
          res.status(500).send(error);
        }
        setLoad(
          "Email n??o enviado, tente novamente, ou envie para contato@mk3representacoes.com.br"
        );
      });
    setTimeout(() => {
      setLoad("");
      window.location.href = "/";
    }, 5000);


  }
  return (
    <div id="boleto">
      <Script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
        strategy="beforeInteractive"
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
      </Head>

      <button
        type="button"
        className={styles.buttonModal}
        data-toggle="modal"
        data-target="#ExemploModalCentralizado"
      >
        2?? via boleto
      </button>

      <div
        className="modal fade"
        id="ExemploModalCentralizado"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="TituloModalCentralizado"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="TituloModalCentralizado">
                2?? via boleto
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fechar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <section className={styles.boleto}>
                <h1>Selecione a representada</h1>
                <div className={styles.representadasCont}>
                  <div>
                    <div
                      onClick={mostrarForm}
                      id="gisele@acrimet.com.br"
                      className={styles.representadas + " seletor"}
                    >
                      <Image src={Acrimet} alt='Acrimet'/>
                    </div>

                    <div
                      onClick={mostrarForm}
                      id="contasareceber@acpplasticos.com.br"
                      className={styles.representadas + " seletor"}
                    >
                      <Image src={ACP} alt='ACP'/>
                    </div>

                    <Link
                      href={
                        "https://psxsistemas.websiteseguro.com/system/adere_2viaboleto/index.php"
                      }
                      passHref
                    >
                      <a target="_blank" rel="noreferrer">
                        <div className={styles.representadas}> <Image src={Adere} alt='Adere'/></div>
                      </a>
                    </Link>

                    <div
                      onClick={mostrarForm}
                      id="grampos.adm@uol.com.br"
                      className={styles.representadas + " seletor"}
                    >
                      <Image src={Bacchi}  alt='Bacchi'/>
                    </div>

                    <div
                      onClick={mostrarForm}
                      id="contasareceber@compactor.com.br"
                      className={styles.representadas + " seletor"}
                    >
                      <Image src={Compactor} alt='Compactor'/>
                    </div>
                  </div>

                  <div>
                    <div onClick={mostrarForm} id="cobrancamaxprint@riobranco.com.br" className={styles.representadas + " seletor" }>
                      <Image src={MaxPrint} alt='MaxPrint'/>
                    </div>

                    <Link
                      href={"https://app.mercur.com.br/portalcliente/login"}
                    >
                      <a target="_blank" rel="noreferrer">
                        <div
                          onClick={mostrarForm}
                          className={styles.representadas + " seletor"}
                        >
                          <Image src={Mercur} alt='Mercur'/>
                        </div>
                      </a>
                    </Link>

                    <div
                      onClick={mostrarForm}
                      id="adm2@papeisoffpaper.com.br"
                      className={styles.representadas + " seletor"}
                    >
                       <Image src={Off_Paper} alt='Off Paper'/>
                    </div>

                    <div onClick={mostrarForm} id="jaqueline.financeiro@seanit.com" className={styles.representadas + " seletor" }>
                    <Image src={Seanit} alt='Seanit'/>
                    </div>

                    <Link href={"https://saodomingos.ind.br/boleto/"}>
                      <a target="_blank" rel="noreferrer">
                        <div className={styles.representadas}> <Image src={SD} alt='S??o Domingos'/>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <form id="form" onSubmit={enviar}>
                  <div>
                    <span>
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                      />
                    </span>

                    <span>
                      <label htmlFor="razao">Raz??o Social</label>
                      <input
                        id="razao"
                        name="razao"
                        type="text"
                        required
                        value={razao}
                        onChange={({ target }) => setRazao(target.value)}
                      />
                    </span>

                    <span>
                      <label htmlFor="cnpj">CNPJ</label>
                      <input
                        id="cnpj"
                        name="cnpj"
                        type="text"
                        required
                        value={cnpj}
                        onChange={({ target }) => setCnpj(target.value)}
                      />
                    </span>

                    <span>
                      <label htmlFor="nf">N??mero da nota fiscal</label>
                      <input
                        id="nf"
                        name="nf"
                        type="text"
                        required
                        value={nf}
                        onChange={({ target }) => setNf(target.value)}
                      />
                    </span>
                  </div>

                  <button>Solicitar 2?? via</button>
                </form>

                <p
                  style={
                    load == "Email enviado"
                      ? { color: "rgb(0, 182, 0" }
                      : { color: "red" }
                  }
                >
                  {load}
                </p>
              </section>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ display: "none" }}
              >
                Salvar mudan??as
              </button>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
        strategy="beforeInteractive"
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"
        strategy="beforeInteractive"
      />

      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"
        strategy="beforeInteractive"
      />
    </div>
  );
};

export default Modal;
