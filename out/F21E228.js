goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25614__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25615__i = 0, G__25615__a = new Array(arguments.length -  0);
while (G__25615__i < G__25615__a.length) {G__25615__a[G__25615__i] = arguments[G__25615__i + 0]; ++G__25615__i;}
  args = new cljs.core.IndexedSeq(G__25615__a,0);
} 
return G__25614__delegate.call(this,args);};
G__25614.cljs$lang$maxFixedArity = 0;
G__25614.cljs$lang$applyTo = (function (arglist__25616){
var args = cljs.core.seq(arglist__25616);
return G__25614__delegate(args);
});
G__25614.cljs$core$IFn$_invoke$arity$variadic = G__25614__delegate;
return G__25614;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25617__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25618__i = 0, G__25618__a = new Array(arguments.length -  0);
while (G__25618__i < G__25618__a.length) {G__25618__a[G__25618__i] = arguments[G__25618__i + 0]; ++G__25618__i;}
  args = new cljs.core.IndexedSeq(G__25618__a,0);
} 
return G__25617__delegate.call(this,args);};
G__25617.cljs$lang$maxFixedArity = 0;
G__25617.cljs$lang$applyTo = (function (arglist__25619){
var args = cljs.core.seq(arglist__25619);
return G__25617__delegate(args);
});
G__25617.cljs$core$IFn$_invoke$arity$variadic = G__25617__delegate;
return G__25617;
})()
;

return null;
});
