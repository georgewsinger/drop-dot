goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__198739__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__198739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__198740__i = 0, G__198740__a = new Array(arguments.length -  0);
while (G__198740__i < G__198740__a.length) {G__198740__a[G__198740__i] = arguments[G__198740__i + 0]; ++G__198740__i;}
  args = new cljs.core.IndexedSeq(G__198740__a,0);
} 
return G__198739__delegate.call(this,args);};
G__198739.cljs$lang$maxFixedArity = 0;
G__198739.cljs$lang$applyTo = (function (arglist__198741){
var args = cljs.core.seq(arglist__198741);
return G__198739__delegate(args);
});
G__198739.cljs$core$IFn$_invoke$arity$variadic = G__198739__delegate;
return G__198739;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__198742__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__198742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__198743__i = 0, G__198743__a = new Array(arguments.length -  0);
while (G__198743__i < G__198743__a.length) {G__198743__a[G__198743__i] = arguments[G__198743__i + 0]; ++G__198743__i;}
  args = new cljs.core.IndexedSeq(G__198743__a,0);
} 
return G__198742__delegate.call(this,args);};
G__198742.cljs$lang$maxFixedArity = 0;
G__198742.cljs$lang$applyTo = (function (arglist__198744){
var args = cljs.core.seq(arglist__198744);
return G__198742__delegate(args);
});
G__198742.cljs$core$IFn$_invoke$arity$variadic = G__198742__delegate;
return G__198742;
})()
;

return null;
});
