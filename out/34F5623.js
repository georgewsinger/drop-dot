goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__327858__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__327858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327859__i = 0, G__327859__a = new Array(arguments.length -  0);
while (G__327859__i < G__327859__a.length) {G__327859__a[G__327859__i] = arguments[G__327859__i + 0]; ++G__327859__i;}
  args = new cljs.core.IndexedSeq(G__327859__a,0);
} 
return G__327858__delegate.call(this,args);};
G__327858.cljs$lang$maxFixedArity = 0;
G__327858.cljs$lang$applyTo = (function (arglist__327860){
var args = cljs.core.seq(arglist__327860);
return G__327858__delegate(args);
});
G__327858.cljs$core$IFn$_invoke$arity$variadic = G__327858__delegate;
return G__327858;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__327861__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__327861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327862__i = 0, G__327862__a = new Array(arguments.length -  0);
while (G__327862__i < G__327862__a.length) {G__327862__a[G__327862__i] = arguments[G__327862__i + 0]; ++G__327862__i;}
  args = new cljs.core.IndexedSeq(G__327862__a,0);
} 
return G__327861__delegate.call(this,args);};
G__327861.cljs$lang$maxFixedArity = 0;
G__327861.cljs$lang$applyTo = (function (arglist__327863){
var args = cljs.core.seq(arglist__327863);
return G__327861__delegate(args);
});
G__327861.cljs$core$IFn$_invoke$arity$variadic = G__327861__delegate;
return G__327861;
})()
;

return null;
});
