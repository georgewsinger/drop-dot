goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46577__i = 0, G__46577__a = new Array(arguments.length -  0);
while (G__46577__i < G__46577__a.length) {G__46577__a[G__46577__i] = arguments[G__46577__i + 0]; ++G__46577__i;}
  args = new cljs.core.IndexedSeq(G__46577__a,0);
} 
return G__46576__delegate.call(this,args);};
G__46576.cljs$lang$maxFixedArity = 0;
G__46576.cljs$lang$applyTo = (function (arglist__46578){
var args = cljs.core.seq(arglist__46578);
return G__46576__delegate(args);
});
G__46576.cljs$core$IFn$_invoke$arity$variadic = G__46576__delegate;
return G__46576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46580__i = 0, G__46580__a = new Array(arguments.length -  0);
while (G__46580__i < G__46580__a.length) {G__46580__a[G__46580__i] = arguments[G__46580__i + 0]; ++G__46580__i;}
  args = new cljs.core.IndexedSeq(G__46580__a,0);
} 
return G__46579__delegate.call(this,args);};
G__46579.cljs$lang$maxFixedArity = 0;
G__46579.cljs$lang$applyTo = (function (arglist__46581){
var args = cljs.core.seq(arglist__46581);
return G__46579__delegate(args);
});
G__46579.cljs$core$IFn$_invoke$arity$variadic = G__46579__delegate;
return G__46579;
})()
;

return null;
});
