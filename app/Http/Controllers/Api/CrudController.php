<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Model\Crud;

class CrudController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data['programmerList'] = Crud::paginate(2);
         $data['storeTitle']    = 'programmerList';
        return response(['data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $rules = [
            'name'      => 'required',
            'email'     => 'required',
            'status'    => 'required'
        ];
        $this->validate($request, $rules);

 

        $data = $request->except('token', 'id', 'image');

        if ($request->hasFile('image')) {
            $imageName        = time().'.'.request()->image->getClientOriginalExtension();
            request()->image->move(public_path('programmerImg'), $imageName);            
            $data['image']    = $imageName;
            $output['image']    = $imageName;

        }

        
        if($request->id){

            $programmerInfo  = Crud::find($request->id);
            if(!empty($imageName)){
                if(!empty($programmerInfo->image)){
                    $file_path = public_path().'/programmerImg' .'/'.$programmerInfo->image;
                    if(file_exists($file_path)) unlink($file_path);
                }
            }

            Crud::where('id', $request->id)->update($data);
            $output['success'] = "Data successfully updated";   
        }else{
            Crud::create($data);
            $output['success'] = "Data successfully inserted";   
        }
        

        return response($output);
    }

    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['programmer'] = Crud::find($id);
        $data['storeTitle'] = 'programmer';

        return response($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $programmerInfo  = Crud::find($id);
        if(!empty($programmerInfo->image)){
            $file_path = public_path().'/programmerImg' .'/'.$programmerInfo->image;
            if(file_exists($file_path)) unlink($file_path);
        }
        
        Crud::where('id',$id)->delete();
        $output['success'] = "Data successfully deleted"; 
        return response($output);
    }
}
