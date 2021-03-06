import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class Invoice extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Invoice</h1>
                        </div>
                    </div>


                            
    


                    <div class="col-xl-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Invoice</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">
                                    <div class="col-12">



                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <div class="invoice-head">
                                                    <div class="row margin-0">
                                                        <div class="col-lg-2 col-md-12 col-12 invoice-title">
                                                            <h2 class="text-center bg-primary ">Invoice</h2>    
                                                        </div>
                                                        <div class="col-lg-3 col-md-12 col-12 invoice-head-info">
                                                            <span class='text-muted'>
                                                                795 Folsom Ave, Suite 600<br/>
                                                                San Francisco, CA 94107<br/>
                                                                P: (123) 456-7890<br/>
                                                            </span>
                                                        </div>
                                                        <div class="col-lg-3 col-md-12 col-12 invoice-head-info"><span class='text-muted'>Order # 12345<br/>21st October 2014</span></div>
                                                        <div class="col-lg-3 col-md-12 col-12 invoice-logo offset-lg-1">
                                                            <img alt="invoice logo" src="images/invoice/invoice-logo.png" class="img-reponsive" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div><br/>
                                            <div class="spacer"></div>
                                            <div class="col-6 invoice-infoblock float-left">
                                                <h4>Billed To:</h4>
                                                <address>
                                                    <h3>John Smith</h3>
                                                    <span class='text-muted'>1234 Main Street<br/>Apt. 34/4B<br/>
                                                        Springfield<br/>ST 54321</span>
                                                </address>
                                            </div>

                                            <div class="col-6 invoice-infoblock text-right">
                                                <h4>Payment Method:</h4>
                                                <address>
                                                    <h3>Credit Card</h3>
                                                    <span class='text-muted'>Visa ending **** 4242<br/>
                                                        jsmith@email.com</span>
                                                </address>

                                                <div class="invoice-due">
                                                    <h3 class="text-muted">Total Due:</h3> &nbsp; <h2 class="text-primary">$ 2140.00</h2>                
                                                </div>

                                            </div>


                                            <div class="clearfix"></div><br/>

                                        </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <h3>Order summary</h3><br/>
                                                <div class="table-responsive">
                                                    <table class="table table-hover invoice-table">
                                                        <thead>
                                                            <tr>
                                                                <td><h4>Item</h4></td>
                                                                <td class="text-center"><h4>Price</h4></td>
                                                                <td class="text-center"><h4>Quantity</h4></td>
                                                                <td class="text-right"><h4>Totals</h4></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td>BS-200</td>
                                                                <td class="text-center">$10.99</td>
                                                                <td class="text-center">1</td>
                                                                <td class="text-right">$10.99</td>
                                                            </tr>
                                                            <tr>
                                                                <td>BS-400</td>
                                                                <td class="text-center">$20.00</td>
                                                                <td class="text-center">3</td>
                                                                <td class="text-right">$60.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>BS-1000</td>
                                                                <td class="text-center">$600.00</td>
                                                                <td class="text-center">1</td>
                                                                <td class="text-right">$600.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>BS-2000</td>
                                                                <td class="text-center">$1000.00</td>
                                                                <td class="text-center">1</td>
                                                                <td class="text-right">$1000.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="thick-line"></td>
                                                                <td class="thick-line"></td>
                                                                <td class="thick-line text-center"><h4>Subtotal</h4></td>
                                                                <td class="thick-line text-right"><h4>$1670.99</h4></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="no-line"></td>
                                                                <td class="no-line"></td>
                                                                <td class="no-line text-center"><h4>Shipping</h4></td>
                                                                <td class="no-line text-right"><h4>$15</h4></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="no-line"></td>
                                                                <td class="no-line"></td>
                                                                <td class="no-line text-center"><h4>VAT</h4></td>
                                                                <td class="no-line text-right"><h4>$150.23</h4></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="no-line"></td>
                                                                <td class="no-line"></td>
                                                                <td class="no-line text-center"><h4>Total</h4></td>
                                                                <td class="no-line text-right"><h3 style={{margin:0}} class="text-primary">$1985.99</h3></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="clearfix"></div><br/>
                                            </div>

                                        </div>





                                        <div class="row">
                                            <div class="col-12 text-center">
                                                <a href="#!" target="_blank" class="btn btn-purple btn-md"><i class="fa fa-print"></i> &nbsp; Print </a>        
                                                <a href="#!" target="_blank" class="btn btn-accent btn-md"><i class="fa fa-send"></i> &nbsp; Send </a>        
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </section></div>






                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Invoice;
