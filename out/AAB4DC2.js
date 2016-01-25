goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__259752__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__259752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259753__i = 0, G__259753__a = new Array(arguments.length -  0);
while (G__259753__i < G__259753__a.length) {G__259753__a[G__259753__i] = arguments[G__259753__i + 0]; ++G__259753__i;}
  args = new cljs.core.IndexedSeq(G__259753__a,0);
} 
return G__259752__delegate.call(this,args);};
G__259752.cljs$lang$maxFixedArity = 0;
G__259752.cljs$lang$applyTo = (function (arglist__259754){
var args = cljs.core.seq(arglist__259754);
return G__259752__delegate(args);
});
G__259752.cljs$core$IFn$_invoke$arity$variadic = G__259752__delegate;
return G__259752;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__259755__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__259755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259756__i = 0, G__259756__a = new Array(arguments.length -  0);
while (G__259756__i < G__259756__a.length) {G__259756__a[G__259756__i] = arguments[G__259756__i + 0]; ++G__259756__i;}
  args = new cljs.core.IndexedSeq(G__259756__a,0);
} 
return G__259755__delegate.call(this,args);};
G__259755.cljs$lang$maxFixedArity = 0;
G__259755.cljs$lang$applyTo = (function (arglist__259757){
var args = cljs.core.seq(arglist__259757);
return G__259755__delegate(args);
});
G__259755.cljs$core$IFn$_invoke$arity$variadic = G__259755__delegate;
return G__259755;
})()
;

return null;
});
