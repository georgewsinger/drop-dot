goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13725__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13726__i = 0, G__13726__a = new Array(arguments.length -  0);
while (G__13726__i < G__13726__a.length) {G__13726__a[G__13726__i] = arguments[G__13726__i + 0]; ++G__13726__i;}
  args = new cljs.core.IndexedSeq(G__13726__a,0);
} 
return G__13725__delegate.call(this,args);};
G__13725.cljs$lang$maxFixedArity = 0;
G__13725.cljs$lang$applyTo = (function (arglist__13727){
var args = cljs.core.seq(arglist__13727);
return G__13725__delegate(args);
});
G__13725.cljs$core$IFn$_invoke$arity$variadic = G__13725__delegate;
return G__13725;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13728__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13729__i = 0, G__13729__a = new Array(arguments.length -  0);
while (G__13729__i < G__13729__a.length) {G__13729__a[G__13729__i] = arguments[G__13729__i + 0]; ++G__13729__i;}
  args = new cljs.core.IndexedSeq(G__13729__a,0);
} 
return G__13728__delegate.call(this,args);};
G__13728.cljs$lang$maxFixedArity = 0;
G__13728.cljs$lang$applyTo = (function (arglist__13730){
var args = cljs.core.seq(arglist__13730);
return G__13728__delegate(args);
});
G__13728.cljs$core$IFn$_invoke$arity$variadic = G__13728__delegate;
return G__13728;
})()
;

return null;
});
