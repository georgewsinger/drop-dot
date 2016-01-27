goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32106__i = 0, G__32106__a = new Array(arguments.length -  0);
while (G__32106__i < G__32106__a.length) {G__32106__a[G__32106__i] = arguments[G__32106__i + 0]; ++G__32106__i;}
  args = new cljs.core.IndexedSeq(G__32106__a,0);
} 
return G__32105__delegate.call(this,args);};
G__32105.cljs$lang$maxFixedArity = 0;
G__32105.cljs$lang$applyTo = (function (arglist__32107){
var args = cljs.core.seq(arglist__32107);
return G__32105__delegate(args);
});
G__32105.cljs$core$IFn$_invoke$arity$variadic = G__32105__delegate;
return G__32105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32109__i = 0, G__32109__a = new Array(arguments.length -  0);
while (G__32109__i < G__32109__a.length) {G__32109__a[G__32109__i] = arguments[G__32109__i + 0]; ++G__32109__i;}
  args = new cljs.core.IndexedSeq(G__32109__a,0);
} 
return G__32108__delegate.call(this,args);};
G__32108.cljs$lang$maxFixedArity = 0;
G__32108.cljs$lang$applyTo = (function (arglist__32110){
var args = cljs.core.seq(arglist__32110);
return G__32108__delegate(args);
});
G__32108.cljs$core$IFn$_invoke$arity$variadic = G__32108__delegate;
return G__32108;
})()
;

return null;
});
