goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__104287__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__104287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104288__i = 0, G__104288__a = new Array(arguments.length -  0);
while (G__104288__i < G__104288__a.length) {G__104288__a[G__104288__i] = arguments[G__104288__i + 0]; ++G__104288__i;}
  args = new cljs.core.IndexedSeq(G__104288__a,0);
} 
return G__104287__delegate.call(this,args);};
G__104287.cljs$lang$maxFixedArity = 0;
G__104287.cljs$lang$applyTo = (function (arglist__104289){
var args = cljs.core.seq(arglist__104289);
return G__104287__delegate(args);
});
G__104287.cljs$core$IFn$_invoke$arity$variadic = G__104287__delegate;
return G__104287;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__104290__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__104290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104291__i = 0, G__104291__a = new Array(arguments.length -  0);
while (G__104291__i < G__104291__a.length) {G__104291__a[G__104291__i] = arguments[G__104291__i + 0]; ++G__104291__i;}
  args = new cljs.core.IndexedSeq(G__104291__a,0);
} 
return G__104290__delegate.call(this,args);};
G__104290.cljs$lang$maxFixedArity = 0;
G__104290.cljs$lang$applyTo = (function (arglist__104292){
var args = cljs.core.seq(arglist__104292);
return G__104290__delegate(args);
});
G__104290.cljs$core$IFn$_invoke$arity$variadic = G__104290__delegate;
return G__104290;
})()
;

return null;
});
