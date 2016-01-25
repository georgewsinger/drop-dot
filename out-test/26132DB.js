goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13171__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13172__i = 0, G__13172__a = new Array(arguments.length -  0);
while (G__13172__i < G__13172__a.length) {G__13172__a[G__13172__i] = arguments[G__13172__i + 0]; ++G__13172__i;}
  args = new cljs.core.IndexedSeq(G__13172__a,0);
} 
return G__13171__delegate.call(this,args);};
G__13171.cljs$lang$maxFixedArity = 0;
G__13171.cljs$lang$applyTo = (function (arglist__13173){
var args = cljs.core.seq(arglist__13173);
return G__13171__delegate(args);
});
G__13171.cljs$core$IFn$_invoke$arity$variadic = G__13171__delegate;
return G__13171;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13174__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13175__i = 0, G__13175__a = new Array(arguments.length -  0);
while (G__13175__i < G__13175__a.length) {G__13175__a[G__13175__i] = arguments[G__13175__i + 0]; ++G__13175__i;}
  args = new cljs.core.IndexedSeq(G__13175__a,0);
} 
return G__13174__delegate.call(this,args);};
G__13174.cljs$lang$maxFixedArity = 0;
G__13174.cljs$lang$applyTo = (function (arglist__13176){
var args = cljs.core.seq(arglist__13176);
return G__13174__delegate(args);
});
G__13174.cljs$core$IFn$_invoke$arity$variadic = G__13174__delegate;
return G__13174;
})()
;

return null;
});
