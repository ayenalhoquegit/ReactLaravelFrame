import React, {Component} from 'react'; 
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxs';
import { connect } from 'react-redux';
import MessageHandler from '../UI/Toaster/MessageHandler';
import * as actionTypes from '../../store/actions/index';
import Loader from '../Loaders/Loader';
import * as  helperFun from '../Helper/Helper';

class  CrudList extends Component{
	constructor(props){
		super(props)
		this.handlePageClick = this.handlePageClick.bind(this);
	}

	componentDidMount(){
		this.props.onSuccessErrorSetNull();   // set errror and success status set null to hide toaster
	  	let params = helperFun.paramsExtract(this.props.location.search);
	  	this.getData(params.page?params.page : 1);

	 }

	 getData = (pageNo) => {
	 	this.props.onInitCrudDataList('/api/crud?page='+pageNo, {
		 	params:{
		 		token : this.props.token
		 	}
	 	}, 'yes');

	 	this.props.history.replace( '/crud?page='+pageNo );
	 }
	    


	crudAddformHandler = () => {
        this.props.history.replace( '/crud/add-crud-form' );
    }

    handlePageClick(data) {
		const page = data.selected >= 0 ? data.selected + 1 : 0;
		this.props.onSetPagiCurrentPage(page);
		this.getData(page);
		
	}


    deleteData = (delId)=>{    
	  	let params = helperFun.paramsExtract(this.props.location.search);
    	axios.delete('api/crud/'+delId+'?token='+this.props.token)
			.then((res) =>{
				this.props.onSuccess(res.data.success);
				this.getData(params.page)
				this.props.onSuccessErrorSetNull();    
				
			}).catch((error)=>{
				this.props.onFail('Internal server error');
			})

    	
    }

    render(){
    	let onLoadContent = this.props.crudError ? this.props.crudError : <Loader/> 
    	let pagination = null;
    	let programmerList = <tr><td colSpan={6} className="text-center">  {onLoadContent} </td></tr>;
    	if(this.props.dataList && this.props.dataList.programmerList){
			programmerList = <Aux>
				{this.props.dataList.programmerList.data.map((programmer, key) =>(
    				<tr key={key}>
                    	<th>{key+1}</th>
                    	<th>{programmer.name}</th>
                    	<th>{programmer.email}</th>
                    	<th>  <img src={programmer.image ? 'programmerImg/'+programmer.image : 'img/no_image.png'} width="50" height="50" /> </th>
                    	<th>{programmer.status == 1? 'Active' : 'Inactive'}</th>
                    	<th width="25%">
                    		<button  className="btn btn-default edit buttonBorderStyle" type="button"><Link to={"/crud/edit-crud-form?id="+programmer.id}>Edit</Link></button>
                  			<button  type="button" className="btn btn-danger dataDelete buttonBorderStyle" onClick={()=> this.deleteData(programmer.id)} >Delete</button>

                    	</th>
                  	</tr> 
          		))} 
          		
			</Aux>;

			pagination = <nav aria-label="">
	          		<ReactPaginate
						pageCount={this.props.pageCount}
						initialPage={this.props.currentPage - 1}
						forcePage={this.props.currentPage - 1}
						pageRangeDisplayed={2}
						marginPagesDisplayed={2}
						previousLabel="Prev"
						nextLabel="Next"
						containerClassName="pagination"
						activeClassName="active"
						disabledClassName="disabled"
						onPageChange={this.handlePageClick}
						disableInitialCallback={true}
					/>
				</nav>
			
		}

    	return (
				<Aux>
					<MessageHandler success={this.props.crudSuccess} error = {this.props.crudError} />
					<div className="well well-sm bar-height" id="" >
		              <div className="row"> 

		                <div className="col-md-12 col-sm-12 col-xs-12">
		                <div className="col-md-3 col-sm-3 col-xs-12 pull-left">
		                	<div className="form-group">  
		                        <div className="input-group " >
		                          <input type="text" className="form-control" name="search" id="search" placeholder="Search by name" />         
		                          <span className="input-group-btn">
		                            <button type="button" className="btn btn-primary classSearch">Search</button>
		                          </span>                                              
		                        </div>
		                     </div>
		                </div>
		                  <div className="input-group col-md-3 col-sm-3 col-xs-12 pull-right" id="" >
		                    <button className="pull-right btn btn-primary btn-round" onClick={this.crudAddformHandler}>Add New</button> 
		                  </div>
		                </div> 

		              </div>
		           </div>

		          

		           <div className="clearfix"></div>
		        	<div id="listView" className="table-responsive-lg"> 
		        		<table className="table table-bordered table-striped jambo_table">
		        			<thead>
		        				<tr>
		                        	<th>#</th>
		                        	<th>Programmer Name</th>
		                        	<th>Email</th>
		                        	<th>Image</th>
		                        	<th>Status</th>
		                        	<th width="25%">Action</th>
		                      	</tr>      
		        			</thead>
		        			<tbody>

		        				{programmerList}
		        			</tbody>
		        		</table>
		        		{pagination}
		        	</div>
				</Aux>
			)

    }
	
}


const mapStateToProps = state => {
    return {
    	dataList : state.crd.dataList,
    	pageCount : state.crd.pageCount,
    	currentPage:state.crd.currentPage,
    	crudSuccess : state.crd.success,
        crudError : state.crd.error,
        token:state.log.token
        
       
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCrudDataList		: (url,params,pagiStatus) => dispatch(actionTypes.getData(url, params, pagiStatus)),
        onStart					: () => dispatch(actionTypes.start()),
        onSuccess				: (success) => dispatch(actionTypes.success(success)),
        onSetPagiCurrentPage	: (pageNo) => dispatch(actionTypes.setPagiCurrentPage(pageNo)),
        onError					: (error) => dispatch(actionTypes.fail(error)),
        onSuccessErrorSetNull	: () => dispatch(actionTypes.successErrorSetNull())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrudList);

