goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__388706__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__388706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__388707__i = 0, G__388707__a = new Array(arguments.length -  0);
while (G__388707__i < G__388707__a.length) {G__388707__a[G__388707__i] = arguments[G__388707__i + 0]; ++G__388707__i;}
  args = new cljs.core.IndexedSeq(G__388707__a,0);
} 
return G__388706__delegate.call(this,args);};
G__388706.cljs$lang$maxFixedArity = 0;
G__388706.cljs$lang$applyTo = (function (arglist__388708){
var args = cljs.core.seq(arglist__388708);
return G__388706__delegate(args);
});
G__388706.cljs$core$IFn$_invoke$arity$variadic = G__388706__delegate;
return G__388706;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__388709__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__388709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__388710__i = 0, G__388710__a = new Array(arguments.length -  0);
while (G__388710__i < G__388710__a.length) {G__388710__a[G__388710__i] = arguments[G__388710__i + 0]; ++G__388710__i;}
  args = new cljs.core.IndexedSeq(G__388710__a,0);
} 
return G__388709__delegate.call(this,args);};
G__388709.cljs$lang$maxFixedArity = 0;
G__388709.cljs$lang$applyTo = (function (arglist__388711){
var args = cljs.core.seq(arglist__388711);
return G__388709__delegate(args);
});
G__388709.cljs$core$IFn$_invoke$arity$variadic = G__388709__delegate;
return G__388709;
})()
;

return null;
});
