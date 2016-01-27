goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__321177__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__321177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321178__i = 0, G__321178__a = new Array(arguments.length -  0);
while (G__321178__i < G__321178__a.length) {G__321178__a[G__321178__i] = arguments[G__321178__i + 0]; ++G__321178__i;}
  args = new cljs.core.IndexedSeq(G__321178__a,0);
} 
return G__321177__delegate.call(this,args);};
G__321177.cljs$lang$maxFixedArity = 0;
G__321177.cljs$lang$applyTo = (function (arglist__321179){
var args = cljs.core.seq(arglist__321179);
return G__321177__delegate(args);
});
G__321177.cljs$core$IFn$_invoke$arity$variadic = G__321177__delegate;
return G__321177;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__321180__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__321180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321181__i = 0, G__321181__a = new Array(arguments.length -  0);
while (G__321181__i < G__321181__a.length) {G__321181__a[G__321181__i] = arguments[G__321181__i + 0]; ++G__321181__i;}
  args = new cljs.core.IndexedSeq(G__321181__a,0);
} 
return G__321180__delegate.call(this,args);};
G__321180.cljs$lang$maxFixedArity = 0;
G__321180.cljs$lang$applyTo = (function (arglist__321182){
var args = cljs.core.seq(arglist__321182);
return G__321180__delegate(args);
});
G__321180.cljs$core$IFn$_invoke$arity$variadic = G__321180__delegate;
return G__321180;
})()
;

return null;
});
