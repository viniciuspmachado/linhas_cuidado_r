import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const divStyle = {
    paddingLeft: '10px',
    paddingRight: "10px;",
  };

const semCursor = {
    cursor: 'default',
};

const Chagas2 = () => {
  return (
    <div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <script src="../files/actions.js"></script>
      <script defer="defer" src="https://barra.brasil.gov.br/barra_2.0.js?ver=5.2.2" type="text/javascript"></script>
      
      <article id="upa" className="container">
        
        <div className="row">
            <div className="col">
                <h1 className="main-title">Pacientes com sinais e sintomas sugestivos de Doença de Chagas<a href="#" id="" className="" target="_self" title="Pacientes com sinais e sintomas sugestivos de Calazar"><i className="fas fa-info-circle align-top"></i></a></h1>
            </div> 
        </div>

        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
            <div className="row">
                <div className="col">
                    <h3 className="target green"><i className="fas fa-map-marker-alt lg"></i>Você esta em: <strong> Unidade de Atenção Primária</strong></h3>
                    <div className="d-flex justify-content-center mg-tp">
                        <div className="item green colorcards">
                            <a href="#">
                                <div className="content">
                                    <i className="fas fa-map-marker-alt "></i>
                                    <p className=""><strong>Atenção Secundária</strong> Confirmação diagnóstica de DCA</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <a href="#" className="btn btn-outline-primary" style={semCursor}>Notificação de caso suspeito de DCA</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <span className="vertical-line arrow-bottom">.</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <a href="#" className="btn btn-outline-primary" style={semCursor}>Coleta de amostras de sangue periférico - para testes <br/>parasitológicos e sorológicos silmultaneamente</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <span className="vertical-line arrow-bottom">.</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="offset-3 col-6 n-pad">
                    <div className="d-flex justify-content-center">
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-center">
                        <div className="btn btn-primary disabled  fluxo-radius align-middle align-items-center d-flex justify-content-center min-w-50 flex-column">
                            <span>Realizar exames parasitológicos</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-3 col-6 n-pad">
                            <div className="d-flex justify-content-center">
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            
                            <div className="col-12">
                                <div className="d-flex justify-content-center">
                                    <span className="vertical-line arrow-bottom arrow-before">.</span>
                                </div>
                            </div>
                            <div className="row">                        
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex justify-content-center">
                                            <div className="btn btn-secondary disabled fluxo-radius align-middle align-items-center d-flex justify-content-center flex-column">
                                                <span style={semCursor}>Resultado Positivo</span>                              
                                            </div>    
                                        </div>    
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <div className="item colorcards samu">
                                            <div className="content align-middle align-items-center d-flex justify-content-center">
                                                    <span style={{"font-size": "80%;"}}>Confirma o caso</span>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className="col-6">
                            
                            <div className="col-12">
                                <div className="d-flex justify-content-center">
                                    <span className="vertical-line arrow-bottom arrow-before">.</span>
                                </div>
                            </div>
                            <div className="row">                        
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex justify-content-center">
                                            <div className="btn btn-secondary disabled fluxo-radius align-middle align-items-center d-flex justify-content-center flex-column">
                                                <span style={{"font-size": "80%;"}}>Resultado Negativo</span>                              
                                            </div>    
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom">.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="btn btn-primary disabled  fluxo-radius align-middle align-items-center d-flex justify-content-center min-w-50 flex-column">
                                    <span>Repetir o exame</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>

                            <div className="row">    
                                <div className="row">
                                    <div className="offset-3 col-6 n-pad">
                                        <div className="d-flex justify-content-center">
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                            </div>
                                        </div>
                                        <div className="row">                        
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <a className="btn btn-outline-primary"> 
                                                        <span style={semCursor}>Resultado Positivo</span>
                                                        
                                                    </a>
                                                </div>   
                                            </div>
                                            
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex justify-content-center">
                                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="item colorcards samu">
                                                            <div className="content align-middle align-items-center d-flex justify-content-center">
                                                                <span style={{"font-size": "80%;"}}>Confirma o caso</span>
                                                             </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                            </div>
                                        </div>
                                                              
                                            <div className="col-12">
                                               
                                                    
                                                        <div className="d-flex justify-content-center">
                                                            <a className="btn btn-outline-primary">
                                                                <span style={semCursor}>Resultado Negativo</span>
                                                                
                                                            </a>
                                                        </div>   
                                               
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex justify-content-center">
                                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="item colorcards samu">
                                                            <div className="content align-middle align-items-center d-flex justify-content-center">
                                                            <span style={{"font-size": "80%;"}}>Descartar o caso se os exames sorológicos também forem negativos</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                       
                                        
                                    </div>
                                    
                                </div>

                            </div>

                        </div>

                    </div>

                    
                    
                    <div className="row">
                        <div className="col-6">
                            
                            
                            
                        </div>
                        <div className="col-6">
                            
                            
                            
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-center">
                        <div className="btn btn-primary disabled  fluxo-radius align-middle align-items-center d-flex justify-content-center min-w-50 flex-column">
                            <span>Realizar Sorologia</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="row">
                        <div className="offset-3 col-6 n-pad">
                            <div className="d-flex justify-content-center">
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            
                            <div className="col-12">
                                <div className="d-flex justify-content-center">
                                    <span className="vertical-line arrow-bottom arrow-before">.</span>
                                </div>
                            </div>
                            <div className="row">                        
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex justify-content-center">
                                            <div className="btn btn-secondary disabled fluxo-radius align-middle align-items-center d-flex justify-content-center flex-column">
                                                <span style={{"font-size": "80%;"}}>Detecção de IgM</span>                              
                                            </div>    
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom">.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">    
                                <div className="row">
                                    <div className="offset-3 col-6 n-pad">
                                        <div className="d-flex justify-content-center">
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                            </div>
                                        </div>
                                        
                                        <div className="row">                        
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <a className="btn btn-outline-primary" >
                                                        <span style={semCursor}>Reagente</span>                                                        
                                                    </a>
                                                </div>   
                                            </div>
                                            
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex justify-content-center">
                                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-center" style={divStyle}>
                                                        <div className="item colorcards samu">
                                                            <div className="content align-middle align-items-center d-flex justify-content-center" >
                                                                
                                                                <span style={{"font-size": "80%;"}}>Confirma o caso</span>
                                                                
                                                             </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                            </div>
                                        </div>
                                                              
                                            <div className="col-12">
                                               
                                                    
                                                        <div className="d-flex justify-content-center">
                                                            <a className="btn btn-outline-primary">
                                                                <span style={semCursor}>Não reagente</span>
                                                                
                                                            </a>
                                                        </div>   
                                               
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex justify-content-center">
                                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-center" style={divStyle}>
                                                        <div className="item colorcards samu">
                                                            <div className="content align-middle align-items-center d-flex justify-content-center">
                                                                <span style={{"font-size": "80%;"}}>Descarta o caso</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                       
                                        
                                    </div>
                                    
                                </div>

                            </div>
                    
                        </div>

                        <div className="col-6">
                            <div className="col-12">
                                <div className="d-flex justify-content-center">
                                    <span className="vertical-line arrow-bottom arrow-before">.</span>
                                </div>
                            </div>
                            <div className="row">                        
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <div className="btn btn-secondary disabled fluxo-radius align-middle align-items-center d-flex justify-content-center flex-column">
                                            <span style={{"font-size": "80%;"}}>Detecção de IgG<br/>(coletar duas amostras com intervalo mínimo de 15 dias)</span>                              
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom">.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                
                                
                                
                                
                                <div className="row">
                                    <div className="offset-3 col-6 n-pad">
                                        <div className="d-flex justify-content-center">
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                            </div>
                                        </div>
                                        <div className="row">                        
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <a className="btn btn-outline-primary" >
                                                        <span style={semCursor}>Soroconversão ou aumento de 2 ou mais títulos</span>
                                                        
                                                    </a>
                                                </div>   
                                            </div>
                                            
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex justify-content-center">
                                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="item colorcards samu">
                                                            <div className="content align-middle align-items-center d-flex justify-content-center">
                                                                    <span style={{"font-size": "80%;"}}>Confirma o caso</span>
                                                             </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                            </div>
                                        </div>
                                                              
                                            <div className="col-12">
                                               
                                                    
                                                        <div className="d-flex justify-content-center">
                                                            <a className="btn btn-outline-primary" >
                                                                <span style={semCursor}>Não reagente ou reagente sem aumento de 2 títulos</span>
                                                                
                                                            </a>
                                                        </div>   
                                               
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex justify-content-center">
                                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="item colorcards samu">
                                                            <div className="content align-middle align-items-center d-flex justify-content-center">
                                                                <span style={{"font-size": "80%;"}}>Descarta o caso</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                       
                                        
                                    </div>
                                    
                                </div>
                            
                        </div>

                    </div>




                    
                    
                </div>

            </div>
        </div>
            <div className="row">
                <div className="col d-flex align-items-start flex-column bd-highlight mb-3 mt-4">
                    <h4 className="legend">Legenda:</h4>
                        <p className="legend mb-0"><strong>Manejo inicial:</strong> medidas iniciais no local de primeiro atendimento até o paciente ser encaminhado para receber o tratamento completo em outro ponto assistencial</p>
                        <p className="legend mb-0"><strong>Planejamento terapêutico:</strong> medidas realizadas no ponto assistencial em que não há necessidade de transferência para outro local</p>
                </div>
            </div>
            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                <button id="goBack" className="btn btn-outline-primary float-right" value="Back" onclick="goBack()">voltar</button>
                <p className="float-right mt-2">Última atualização: 30 de Janeiro de 2023</p>
            </div>
        
        </section>

      </article>
      
      chagas
    </div>

    

  );
};

export default Chagas2;
