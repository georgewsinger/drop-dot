goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__300667__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__300667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300668__i = 0, G__300668__a = new Array(arguments.length -  0);
while (G__300668__i < G__300668__a.length) {G__300668__a[G__300668__i] = arguments[G__300668__i + 0]; ++G__300668__i;}
  args = new cljs.core.IndexedSeq(G__300668__a,0);
} 
return G__300667__delegate.call(this,args);};
G__300667.cljs$lang$maxFixedArity = 0;
G__300667.cljs$lang$applyTo = (function (arglist__300669){
var args = cljs.core.seq(arglist__300669);
return G__300667__delegate(args);
});
G__300667.cljs$core$IFn$_invoke$arity$variadic = G__300667__delegate;
return G__300667;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__300670__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__300670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300671__i = 0, G__300671__a = new Array(arguments.length -  0);
while (G__300671__i < G__300671__a.length) {G__300671__a[G__300671__i] = arguments[G__300671__i + 0]; ++G__300671__i;}
  args = new cljs.core.IndexedSeq(G__300671__a,0);
} 
return G__300670__delegate.call(this,args);};
G__300670.cljs$lang$maxFixedArity = 0;
G__300670.cljs$lang$applyTo = (function (arglist__300672){
var args = cljs.core.seq(arglist__300672);
return G__300670__delegate(args);
});
G__300670.cljs$core$IFn$_invoke$arity$variadic = G__300670__delegate;
return G__300670;
})()
;

return null;
});
