<?php
namespace App\Http\Controllers;

use App\Favorite;
use Illuminate\Http\Request;

class FavoritesController extends Controller
{
    public function index(Request $request)
    {
        $favorites = Favorite::where('user_id', $request->user()->id)->get();
        return response()->success(compact('favorites'));
    }

    public function create(Request $request)
    {
        $favorite = new Favorite();
        $favorite->user_id = $request->user()->id;
        $favorite->data = $request->data;
        $favorite->slug = $request->slug;
        $favorite->save();
    }

    public function delete(Request $request)
    {
        $favorite = Favorite::where([
            ['user_id', $request->user()->id],
            ['slug', $request->slug],
            ]);
        $favorite->delete();
    }
}
