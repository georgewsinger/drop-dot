goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17650__i = 0, G__17650__a = new Array(arguments.length -  0);
while (G__17650__i < G__17650__a.length) {G__17650__a[G__17650__i] = arguments[G__17650__i + 0]; ++G__17650__i;}
  args = new cljs.core.IndexedSeq(G__17650__a,0);
} 
return G__17649__delegate.call(this,args);};
G__17649.cljs$lang$maxFixedArity = 0;
G__17649.cljs$lang$applyTo = (function (arglist__17651){
var args = cljs.core.seq(arglist__17651);
return G__17649__delegate(args);
});
G__17649.cljs$core$IFn$_invoke$arity$variadic = G__17649__delegate;
return G__17649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17653__i = 0, G__17653__a = new Array(arguments.length -  0);
while (G__17653__i < G__17653__a.length) {G__17653__a[G__17653__i] = arguments[G__17653__i + 0]; ++G__17653__i;}
  args = new cljs.core.IndexedSeq(G__17653__a,0);
} 
return G__17652__delegate.call(this,args);};
G__17652.cljs$lang$maxFixedArity = 0;
G__17652.cljs$lang$applyTo = (function (arglist__17654){
var args = cljs.core.seq(arglist__17654);
return G__17652__delegate(args);
});
G__17652.cljs$core$IFn$_invoke$arity$variadic = G__17652__delegate;
return G__17652;
})()
;

return null;
});
