goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__119649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__119649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__119650__i = 0, G__119650__a = new Array(arguments.length -  0);
while (G__119650__i < G__119650__a.length) {G__119650__a[G__119650__i] = arguments[G__119650__i + 0]; ++G__119650__i;}
  args = new cljs.core.IndexedSeq(G__119650__a,0);
} 
return G__119649__delegate.call(this,args);};
G__119649.cljs$lang$maxFixedArity = 0;
G__119649.cljs$lang$applyTo = (function (arglist__119651){
var args = cljs.core.seq(arglist__119651);
return G__119649__delegate(args);
});
G__119649.cljs$core$IFn$_invoke$arity$variadic = G__119649__delegate;
return G__119649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__119652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__119652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__119653__i = 0, G__119653__a = new Array(arguments.length -  0);
while (G__119653__i < G__119653__a.length) {G__119653__a[G__119653__i] = arguments[G__119653__i + 0]; ++G__119653__i;}
  args = new cljs.core.IndexedSeq(G__119653__a,0);
} 
return G__119652__delegate.call(this,args);};
G__119652.cljs$lang$maxFixedArity = 0;
G__119652.cljs$lang$applyTo = (function (arglist__119654){
var args = cljs.core.seq(arglist__119654);
return G__119652__delegate(args);
});
G__119652.cljs$core$IFn$_invoke$arity$variadic = G__119652__delegate;
return G__119652;
})()
;

return null;
});
