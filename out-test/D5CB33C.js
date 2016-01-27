goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__160133__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__160133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160134__i = 0, G__160134__a = new Array(arguments.length -  0);
while (G__160134__i < G__160134__a.length) {G__160134__a[G__160134__i] = arguments[G__160134__i + 0]; ++G__160134__i;}
  args = new cljs.core.IndexedSeq(G__160134__a,0);
} 
return G__160133__delegate.call(this,args);};
G__160133.cljs$lang$maxFixedArity = 0;
G__160133.cljs$lang$applyTo = (function (arglist__160135){
var args = cljs.core.seq(arglist__160135);
return G__160133__delegate(args);
});
G__160133.cljs$core$IFn$_invoke$arity$variadic = G__160133__delegate;
return G__160133;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__160136__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__160136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160137__i = 0, G__160137__a = new Array(arguments.length -  0);
while (G__160137__i < G__160137__a.length) {G__160137__a[G__160137__i] = arguments[G__160137__i + 0]; ++G__160137__i;}
  args = new cljs.core.IndexedSeq(G__160137__a,0);
} 
return G__160136__delegate.call(this,args);};
G__160136.cljs$lang$maxFixedArity = 0;
G__160136.cljs$lang$applyTo = (function (arglist__160138){
var args = cljs.core.seq(arglist__160138);
return G__160136__delegate(args);
});
G__160136.cljs$core$IFn$_invoke$arity$variadic = G__160136__delegate;
return G__160136;
})()
;

return null;
});
