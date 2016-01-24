goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32010__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32011__i = 0, G__32011__a = new Array(arguments.length -  0);
while (G__32011__i < G__32011__a.length) {G__32011__a[G__32011__i] = arguments[G__32011__i + 0]; ++G__32011__i;}
  args = new cljs.core.IndexedSeq(G__32011__a,0);
} 
return G__32010__delegate.call(this,args);};
G__32010.cljs$lang$maxFixedArity = 0;
G__32010.cljs$lang$applyTo = (function (arglist__32012){
var args = cljs.core.seq(arglist__32012);
return G__32010__delegate(args);
});
G__32010.cljs$core$IFn$_invoke$arity$variadic = G__32010__delegate;
return G__32010;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32013__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32014__i = 0, G__32014__a = new Array(arguments.length -  0);
while (G__32014__i < G__32014__a.length) {G__32014__a[G__32014__i] = arguments[G__32014__i + 0]; ++G__32014__i;}
  args = new cljs.core.IndexedSeq(G__32014__a,0);
} 
return G__32013__delegate.call(this,args);};
G__32013.cljs$lang$maxFixedArity = 0;
G__32013.cljs$lang$applyTo = (function (arglist__32015){
var args = cljs.core.seq(arglist__32015);
return G__32013__delegate(args);
});
G__32013.cljs$core$IFn$_invoke$arity$variadic = G__32013__delegate;
return G__32013;
})()
;

return null;
});
