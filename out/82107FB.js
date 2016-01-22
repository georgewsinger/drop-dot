goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24794__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24795__i = 0, G__24795__a = new Array(arguments.length -  0);
while (G__24795__i < G__24795__a.length) {G__24795__a[G__24795__i] = arguments[G__24795__i + 0]; ++G__24795__i;}
  args = new cljs.core.IndexedSeq(G__24795__a,0);
} 
return G__24794__delegate.call(this,args);};
G__24794.cljs$lang$maxFixedArity = 0;
G__24794.cljs$lang$applyTo = (function (arglist__24796){
var args = cljs.core.seq(arglist__24796);
return G__24794__delegate(args);
});
G__24794.cljs$core$IFn$_invoke$arity$variadic = G__24794__delegate;
return G__24794;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24797__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24798__i = 0, G__24798__a = new Array(arguments.length -  0);
while (G__24798__i < G__24798__a.length) {G__24798__a[G__24798__i] = arguments[G__24798__i + 0]; ++G__24798__i;}
  args = new cljs.core.IndexedSeq(G__24798__a,0);
} 
return G__24797__delegate.call(this,args);};
G__24797.cljs$lang$maxFixedArity = 0;
G__24797.cljs$lang$applyTo = (function (arglist__24799){
var args = cljs.core.seq(arglist__24799);
return G__24797__delegate(args);
});
G__24797.cljs$core$IFn$_invoke$arity$variadic = G__24797__delegate;
return G__24797;
})()
;

return null;
});
