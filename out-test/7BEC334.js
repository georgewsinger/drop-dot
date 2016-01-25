goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13269__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13270__i = 0, G__13270__a = new Array(arguments.length -  0);
while (G__13270__i < G__13270__a.length) {G__13270__a[G__13270__i] = arguments[G__13270__i + 0]; ++G__13270__i;}
  args = new cljs.core.IndexedSeq(G__13270__a,0);
} 
return G__13269__delegate.call(this,args);};
G__13269.cljs$lang$maxFixedArity = 0;
G__13269.cljs$lang$applyTo = (function (arglist__13271){
var args = cljs.core.seq(arglist__13271);
return G__13269__delegate(args);
});
G__13269.cljs$core$IFn$_invoke$arity$variadic = G__13269__delegate;
return G__13269;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13272__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13273__i = 0, G__13273__a = new Array(arguments.length -  0);
while (G__13273__i < G__13273__a.length) {G__13273__a[G__13273__i] = arguments[G__13273__i + 0]; ++G__13273__i;}
  args = new cljs.core.IndexedSeq(G__13273__a,0);
} 
return G__13272__delegate.call(this,args);};
G__13272.cljs$lang$maxFixedArity = 0;
G__13272.cljs$lang$applyTo = (function (arglist__13274){
var args = cljs.core.seq(arglist__13274);
return G__13272__delegate(args);
});
G__13272.cljs$core$IFn$_invoke$arity$variadic = G__13272__delegate;
return G__13272;
})()
;

return null;
});
