goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25739__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25740__i = 0, G__25740__a = new Array(arguments.length -  0);
while (G__25740__i < G__25740__a.length) {G__25740__a[G__25740__i] = arguments[G__25740__i + 0]; ++G__25740__i;}
  args = new cljs.core.IndexedSeq(G__25740__a,0);
} 
return G__25739__delegate.call(this,args);};
G__25739.cljs$lang$maxFixedArity = 0;
G__25739.cljs$lang$applyTo = (function (arglist__25741){
var args = cljs.core.seq(arglist__25741);
return G__25739__delegate(args);
});
G__25739.cljs$core$IFn$_invoke$arity$variadic = G__25739__delegate;
return G__25739;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25742__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25743__i = 0, G__25743__a = new Array(arguments.length -  0);
while (G__25743__i < G__25743__a.length) {G__25743__a[G__25743__i] = arguments[G__25743__i + 0]; ++G__25743__i;}
  args = new cljs.core.IndexedSeq(G__25743__a,0);
} 
return G__25742__delegate.call(this,args);};
G__25742.cljs$lang$maxFixedArity = 0;
G__25742.cljs$lang$applyTo = (function (arglist__25744){
var args = cljs.core.seq(arglist__25744);
return G__25742__delegate(args);
});
G__25742.cljs$core$IFn$_invoke$arity$variadic = G__25742__delegate;
return G__25742;
})()
;

return null;
});
