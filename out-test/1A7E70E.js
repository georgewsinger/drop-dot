goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39959__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39960__i = 0, G__39960__a = new Array(arguments.length -  0);
while (G__39960__i < G__39960__a.length) {G__39960__a[G__39960__i] = arguments[G__39960__i + 0]; ++G__39960__i;}
  args = new cljs.core.IndexedSeq(G__39960__a,0);
} 
return G__39959__delegate.call(this,args);};
G__39959.cljs$lang$maxFixedArity = 0;
G__39959.cljs$lang$applyTo = (function (arglist__39961){
var args = cljs.core.seq(arglist__39961);
return G__39959__delegate(args);
});
G__39959.cljs$core$IFn$_invoke$arity$variadic = G__39959__delegate;
return G__39959;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39962__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39963__i = 0, G__39963__a = new Array(arguments.length -  0);
while (G__39963__i < G__39963__a.length) {G__39963__a[G__39963__i] = arguments[G__39963__i + 0]; ++G__39963__i;}
  args = new cljs.core.IndexedSeq(G__39963__a,0);
} 
return G__39962__delegate.call(this,args);};
G__39962.cljs$lang$maxFixedArity = 0;
G__39962.cljs$lang$applyTo = (function (arglist__39964){
var args = cljs.core.seq(arglist__39964);
return G__39962__delegate(args);
});
G__39962.cljs$core$IFn$_invoke$arity$variadic = G__39962__delegate;
return G__39962;
})()
;

return null;
});
