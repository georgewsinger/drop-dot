goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52991__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52992__i = 0, G__52992__a = new Array(arguments.length -  0);
while (G__52992__i < G__52992__a.length) {G__52992__a[G__52992__i] = arguments[G__52992__i + 0]; ++G__52992__i;}
  args = new cljs.core.IndexedSeq(G__52992__a,0);
} 
return G__52991__delegate.call(this,args);};
G__52991.cljs$lang$maxFixedArity = 0;
G__52991.cljs$lang$applyTo = (function (arglist__52993){
var args = cljs.core.seq(arglist__52993);
return G__52991__delegate(args);
});
G__52991.cljs$core$IFn$_invoke$arity$variadic = G__52991__delegate;
return G__52991;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52994__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52995__i = 0, G__52995__a = new Array(arguments.length -  0);
while (G__52995__i < G__52995__a.length) {G__52995__a[G__52995__i] = arguments[G__52995__i + 0]; ++G__52995__i;}
  args = new cljs.core.IndexedSeq(G__52995__a,0);
} 
return G__52994__delegate.call(this,args);};
G__52994.cljs$lang$maxFixedArity = 0;
G__52994.cljs$lang$applyTo = (function (arglist__52996){
var args = cljs.core.seq(arglist__52996);
return G__52994__delegate(args);
});
G__52994.cljs$core$IFn$_invoke$arity$variadic = G__52994__delegate;
return G__52994;
})()
;

return null;
});
