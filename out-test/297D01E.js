goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__157424__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__157424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157425__i = 0, G__157425__a = new Array(arguments.length -  0);
while (G__157425__i < G__157425__a.length) {G__157425__a[G__157425__i] = arguments[G__157425__i + 0]; ++G__157425__i;}
  args = new cljs.core.IndexedSeq(G__157425__a,0);
} 
return G__157424__delegate.call(this,args);};
G__157424.cljs$lang$maxFixedArity = 0;
G__157424.cljs$lang$applyTo = (function (arglist__157426){
var args = cljs.core.seq(arglist__157426);
return G__157424__delegate(args);
});
G__157424.cljs$core$IFn$_invoke$arity$variadic = G__157424__delegate;
return G__157424;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__157427__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__157427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157428__i = 0, G__157428__a = new Array(arguments.length -  0);
while (G__157428__i < G__157428__a.length) {G__157428__a[G__157428__i] = arguments[G__157428__i + 0]; ++G__157428__i;}
  args = new cljs.core.IndexedSeq(G__157428__a,0);
} 
return G__157427__delegate.call(this,args);};
G__157427.cljs$lang$maxFixedArity = 0;
G__157427.cljs$lang$applyTo = (function (arglist__157429){
var args = cljs.core.seq(arglist__157429);
return G__157427__delegate(args);
});
G__157427.cljs$core$IFn$_invoke$arity$variadic = G__157427__delegate;
return G__157427;
})()
;

return null;
});
