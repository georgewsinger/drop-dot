goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32140__i = 0, G__32140__a = new Array(arguments.length -  0);
while (G__32140__i < G__32140__a.length) {G__32140__a[G__32140__i] = arguments[G__32140__i + 0]; ++G__32140__i;}
  args = new cljs.core.IndexedSeq(G__32140__a,0);
} 
return G__32139__delegate.call(this,args);};
G__32139.cljs$lang$maxFixedArity = 0;
G__32139.cljs$lang$applyTo = (function (arglist__32141){
var args = cljs.core.seq(arglist__32141);
return G__32139__delegate(args);
});
G__32139.cljs$core$IFn$_invoke$arity$variadic = G__32139__delegate;
return G__32139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32143__i = 0, G__32143__a = new Array(arguments.length -  0);
while (G__32143__i < G__32143__a.length) {G__32143__a[G__32143__i] = arguments[G__32143__i + 0]; ++G__32143__i;}
  args = new cljs.core.IndexedSeq(G__32143__a,0);
} 
return G__32142__delegate.call(this,args);};
G__32142.cljs$lang$maxFixedArity = 0;
G__32142.cljs$lang$applyTo = (function (arglist__32144){
var args = cljs.core.seq(arglist__32144);
return G__32142__delegate(args);
});
G__32142.cljs$core$IFn$_invoke$arity$variadic = G__32142__delegate;
return G__32142;
})()
;

return null;
});
