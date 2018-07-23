<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::middleware('auth:api')->get('/favorites/', 'FavoritesController@index');
Route::middleware('auth:api')->post('/favorites/create/', 'FavoritesController@create');
Route::middleware('auth:api')->post('/favorites/delete/', 'FavoritesController@delete');

Route::post('/login/', 'Auth\LoginController@apiLogin');
Route::post('/register/', 'Auth\RegisterController@apiCreate');

